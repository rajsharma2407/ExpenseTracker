package com.yaExpences.yaExpencesTracker.service;


import com.yaExpences.yaExpencesTracker.model.Salary;
import com.yaExpences.yaExpencesTracker.repository.SalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryService {

    @Autowired
    SalaryRepository salaryRepository;

    public void updateMoneyLeft(int salary){
        int index = (int)salaryRepository.count();
        Salary s = salaryRepository.findById(index);
        s.setMoneyLeft(salary);
        salaryRepository.save(s);
    }

    public Salary getSalary(){
        int index = (int)salaryRepository.count();
        return salaryRepository.findById(index);
    }

    public List<Salary> getAllSalaries(){
        return salaryRepository.findAll();
    }
}
