package com.nickfin.service;

import com.nickfin.entity.Revenue;
import com.nickfin.repository.RevenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RevenueServiceImpl implements RevenueService {
    @Autowired
    private RevenueRepository expenseRepository;

    @Override
    public Revenue createRevenue(Revenue expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public Revenue getRevenueById(Long id) {
        return expenseRepository.getReferenceById(id);
    }

    @Override
    public List<Revenue> getAllRevenues() {
        return expenseRepository.findAll();
    }

    @Override
    public Revenue updateRevenue(Revenue expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public void deleteRevenue(Long id) {
        expenseRepository.deleteById(id);
    }
}
