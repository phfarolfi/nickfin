package com.nickfin.controller;

import com.nickfin.entity.Expense;
import com.nickfin.repository.ExpenseRepository;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ExpenseController {
    @Autowired
    ExpenseRepository expenseRepository;

    @GetMapping("/expense/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<List<Expense>> getAllExpenses() {
        try {
            List<Expense> expenses = expenseRepository.findAll();

            return ResponseEntity.ok().body(expenses);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/expense/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Void> create(@RequestBody Expense expense) {
        try {
            expenseRepository.save(expense);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
