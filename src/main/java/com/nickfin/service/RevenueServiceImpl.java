package com.nickfin.service;

import com.nickfin.entity.Revenue;
import com.nickfin.repository.RevenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RevenueServiceImpl implements RevenueService {
    @Autowired
    private RevenueRepository revenueRepository;

    @Override
    public Revenue createRevenue(Revenue expense) {
        return revenueRepository.save(expense);
    }

    @Override
    public Revenue getRevenueById(Long id) {
        return revenueRepository.getReferenceById(id);
    }

    @Override
    public List<Revenue> getAllRevenues() {
        return revenueRepository.findAll();
    }

    @Override
    public Revenue updateRevenue(Revenue expense) {
        return revenueRepository.save(expense);
    }

    @Override
    public void deleteRevenue(Long id) {
        revenueRepository.deleteById(id);
    }
}
