package com.nickfin.service;

import com.nickfin.entity.Expense;

import java.util.List;

public interface ExpenseService {
    public Expense createExpense(Expense expense);

    public Expense getExpenseById(Long id);

    public List<Expense> getAllExpenses();

    public List<Expense> getExpensesByPeriod(Long start, Long end);

    public Expense updateExpense(Expense expense);

    public void deleteExpense(Long id);
}
