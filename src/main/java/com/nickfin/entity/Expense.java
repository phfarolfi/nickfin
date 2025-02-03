package com.nickfin.entity;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("expense")
public class Expense extends Entry {
    private Long installmentNumber;
    private String payee;
    private Boolean paid;

    public Long getInstallmentNumber() {
        return installmentNumber;
    }

    public void setInstallmentNumber(Long installmentNumber) {
        this.installmentNumber = installmentNumber;
    }

    public String getPayee() {
        return payee;
    }

    public void setPayee(String payee) {
        this.payee = payee;
    }

    public Boolean getPaid() {
        return paid;
    }

    public void setPaid(Boolean paid) {
        this.paid = paid;
    }
}
