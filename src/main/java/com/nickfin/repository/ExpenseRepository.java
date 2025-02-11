package com.nickfin.repository;

import com.nickfin.entity.Expense;
import jakarta.annotation.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;


@Resource
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findAllByDateBetween(Long start, Long end);

    @Query("select e from Expense e where e.date >= :start")
    List<Expense> findAllWithDateAfter(@Param("start") Long start);

    @Query("select e from Expense e where e.date <= :end")
    List<Expense> findAllWithDateBefore(@Param("end") Long end);
}
