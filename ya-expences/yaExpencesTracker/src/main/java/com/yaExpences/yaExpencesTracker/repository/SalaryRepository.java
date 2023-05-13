package com.yaExpences.yaExpencesTracker.repository;

import com.yaExpences.yaExpencesTracker.model.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SalaryRepository extends JpaRepository<Salary,Integer> {

    public Salary findById(int index);
}
