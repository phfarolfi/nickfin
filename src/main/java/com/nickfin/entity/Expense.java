package com.nickfin.entity;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("expense")
public class Expense extends Entry {
    private Long installmentNumber;
    private Long installmentTotal;
    private String payee;
    private Boolean paid;

    public Long getInstallmentNumber() {
        return installmentNumber;
    }

    public void setInstallmentNumber(Long installmentNumber) {
        this.installmentNumber = installmentNumber;
    }

    public Long getInstallmentTotal() { return installmentTotal; }

    public void setInstallmentTotal(Long installmentTotal) { this.installmentTotal = installmentTotal; }

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
