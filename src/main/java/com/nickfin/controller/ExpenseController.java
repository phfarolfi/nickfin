package com.nickfin.controller;

import com.nickfin.entity.Expense;
import com.nickfin.service.ExpenseServiceImpl;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExpenseController {
    @Autowired
    ExpenseServiceImpl expenseService;

    @GetMapping("/expense/all/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<List<Expense>> getAllExpenses() {
        try {
            List<Expense> expenses = expenseService.getAllExpenses();

            return ResponseEntity.ok().body(expenses);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/expense/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<List<Expense>> getExpenses(@RequestParam(required = false) Long start,  @RequestParam(required = false) Long end) {
        try {
            List<Expense> expenses = expenseService.getExpensesByPeriod(start, end);

            return ResponseEntity.ok().body(expenses);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/expense/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Expense> create(@RequestBody Expense expense) {
        try {
            expense.setCreatedAt(System.currentTimeMillis() / 1000);
            Expense newExpense = expenseService.createExpense(expense);

            return ResponseEntity.ok().body(newExpense);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/expense/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Expense> update(@RequestBody Expense expense) {
        try {
            Expense updatedExpense = expenseService.updateExpense(expense);

            return ResponseEntity.ok().body(updatedExpense);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/expense/")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<Expense> delete(@RequestBody Expense expense) {
        try {
            expenseService.deleteExpense(expense.getId());

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
