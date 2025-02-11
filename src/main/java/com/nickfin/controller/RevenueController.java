package com.nickfin.controller;

import com.nickfin.entity.Revenue;
import com.nickfin.service.RevenueServiceImpl;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RevenueController {
    @Autowired
    RevenueServiceImpl revenueService;

    @GetMapping("/revenue/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<List<Revenue>> getAllRevenues() {
        try {
            List<Revenue> revenues = revenueService.getAllRevenues();

            return ResponseEntity.ok().body(revenues);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/revenue/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Revenue> create(@RequestBody Revenue revenue) {
        try {
            revenue.setCreatedAt(System.currentTimeMillis() / 1000);
            Revenue newRevenue = revenueService.createRevenue(revenue);

            return ResponseEntity.ok().body(newRevenue);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/revenue/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Revenue> update(@RequestBody Revenue revenue) {
        try {
            Revenue updatedRevenue = revenueService.updateRevenue(revenue);

            return ResponseEntity.ok().body(updatedRevenue);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/revenue/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Revenue> delete(@RequestBody Revenue revenue) {
        try {
            revenueService.deleteRevenue(revenue.getId());

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
