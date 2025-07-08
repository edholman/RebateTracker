import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead creation endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      res.status(201).json({ success: true, lead });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      console.error("Error creating lead:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to create lead" 
      });
    }
  });

  // Get all leads endpoint (for admin purposes)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json({ success: true, leads });
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch leads" 
      });
    }
  });

  // Get single lead endpoint
  app.get("/api/leads/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid lead ID" 
        });
      }
      
      const lead = await storage.getLeadById(id);
      if (!lead) {
        return res.status(404).json({ 
          success: false, 
          message: "Lead not found" 
        });
      }
      
      res.json({ success: true, lead });
    } catch (error) {
      console.error("Error fetching lead:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch lead" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
