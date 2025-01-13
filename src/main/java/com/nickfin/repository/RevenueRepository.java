package com.nickfin.repository;

import com.nickfin.entity.Revenue;
import jakarta.annotation.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

@Resource
public interface RevenueRepository extends JpaRepository<Revenue, Long> {}
