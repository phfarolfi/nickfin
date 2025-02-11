package com.nickfin.service;

import com.nickfin.entity.Revenue;

import java.util.List;

public interface RevenueService {
    public Revenue createRevenue(Revenue expense);

    public Revenue getRevenueById(Long id);

    public List<Revenue> getAllRevenues();

    public List<Revenue> getRevenuesByPeriod(Long start, Long end);

    public Revenue updateRevenue(Revenue expense);

    public void deleteRevenue(Long id);
}
