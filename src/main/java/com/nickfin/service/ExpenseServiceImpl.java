package com.nickfin.service;

import com.nickfin.entity.Expense;
import com.nickfin.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.time.ZoneId;
import java.time.LocalDate;
import java.time.Instant;

@Service
public class ExpenseServiceImpl implements ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;

    @Override
    public Expense createExpense(Expense expense) {
        List<Expense> installmentExpenses = new ArrayList<>();
        ZoneId zone = ZoneId.systemDefault();

        // Convert Unix timestamp to LocalDate
        LocalDate initialDate = Instant.ofEpochSecond(expense.getDate()).atZone(zone).toLocalDate();

        for (int i = 0; i < expense.getInstallmentTotal(); i++) {
            LocalDate newDate = initialDate.plusMonths(i); // Increment date by one month
            Long newDateUnix = newDate.atStartOfDay(zone).toEpochSecond(); // Convert back to Unix timestamp

            Expense newExpense = copyWithNewDate(expense, newDateUnix, i+1);

            installmentExpenses.add(newExpense);
        }

        expenseRepository.saveAll(installmentExpenses);

        return expense;
    }

    @Override
    public List<Expense> getExpensesByPeriod(Long start, Long end) {
        if (start != null && end != null) {
            return expenseRepository.findAllByDateBetween(start, end);
        }

        if (start != null) {
            return expenseRepository.findAllWithDateAfter(start);
        }

        if (end != null) {
            return expenseRepository.findAllWithDateBefore(end);
        }

        return expenseRepository.findAll();
    }

    @Override
    public Expense getExpenseById(Long id) {
        return expenseRepository.getReferenceById(id);
    }

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense updateExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    public Expense copyWithNewDate(Expense expense, Long newDateUnix, int installmentCounter) {
        Expense newExpense = new Expense(); // Copy data from the original expense

        // Entry
        newExpense.setDate(newDateUnix);
        newExpense.setCreatedAt(expense.getCreatedAt());
        newExpense.setDescription(expense.getDescription());
        newExpense.setPaymentMethod(expense.getPaymentMethod());
        newExpense.setPayer(expense.getPayer());
        newExpense.setCategory(expense.getCategory());
        newExpense.setAmount(expense.getAmount());

        // Expense
        newExpense.setInstallmentNumber((long) installmentCounter);
        newExpense.setInstallmentTotal(expense.getInstallmentTotal());
        newExpense.setPayee(expense.getPayee());
        newExpense.setPaid(false);

        return newExpense;
    }
}
