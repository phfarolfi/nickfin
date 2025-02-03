package com.nickfin.entity;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("revenue")
public class Revenue extends Entry {}
