import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      priceRange: "",
      estimatedRebate: 0,
    },
  });

  const createLeadMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Thank you!",
        description: "We'll contact you shortly to discuss your rebate qualification.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertLead) => {
    // Calculate estimated rebate based on price range
    let estimatedRebate = 0;
    const priceRange = data.priceRange;
    
    if (priceRange === "$300,000 - $500,000") {
      estimatedRebate = 8000; // Average of range * 2%
    } else if (priceRange === "$500,000 - $750,000") {
      estimatedRebate = 12500;
    } else if (priceRange === "$750,000 - $1,000,000") {
      estimatedRebate = 17500;
    } else if (priceRange === "$1,000,000+") {
      estimatedRebate = 20000;
    }

    createLeadMutation.mutate({
      ...data,
      estimatedRebate,
    });
  };

  return (
    <section id="contact-form" className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-dark mb-4">Ready to Save Thousands?</h2>
          <p className="text-xl text-gray-600">Get started with your rebate qualification today</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="priceRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Purchase Price Range</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your price range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="$300,000 - $500,000">$300,000 - $500,000</SelectItem>
                      <SelectItem value="$500,000 - $750,000">$500,000 - $750,000</SelectItem>
                      <SelectItem value="$750,000 - $1,000,000">$750,000 - $1,000,000</SelectItem>
                      <SelectItem value="$1,000,000+">$1,000,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-rebate-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-rebate-dark transition-colors"
              disabled={createLeadMutation.isPending}
            >
              {createLeadMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Calculate My Exact Rebate →"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
