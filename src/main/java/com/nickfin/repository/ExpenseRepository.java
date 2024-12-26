package com.nickfin.repository;

import com.nickfin.entity.Expense;
import jakarta.annotation.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

@Resource
public interface ExpenseRepository extends JpaRepository<Expense, Long> {}
