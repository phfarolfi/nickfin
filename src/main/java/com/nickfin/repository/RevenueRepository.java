package com.nickfin.repository;

import com.nickfin.entity.Expense;
import com.nickfin.entity.Revenue;
import jakarta.annotation.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Resource
public interface RevenueRepository extends JpaRepository<Revenue, Long> {
    List<Revenue> findAllByDateBetween(Long start, Long end);

    @Query("select e from Revenue e where e.date >= :start")
    List<Revenue> findAllWithDateAfter(@Param("start") Long start);

    @Query("select e from Revenue e where e.date <= :end")
    List<Revenue> findAllWithDateBefore(@Param("end") Long end);
}
