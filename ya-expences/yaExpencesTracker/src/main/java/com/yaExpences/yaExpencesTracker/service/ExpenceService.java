package com.yaExpences.yaExpencesTracker.service;

import com.yaExpences.yaExpencesTracker.model.Expence;
import com.yaExpences.yaExpencesTracker.model.Salary;
import com.yaExpences.yaExpencesTracker.repository.ExpenceRepository;
import com.yaExpences.yaExpencesTracker.repository.SalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class ExpenceService {
    @Autowired
    ExpenceRepository expenceRepository;


    @Autowired
    SalaryService salaryService;
    @Autowired
    SalaryRepository salaryRepository;

    public int addExpence(Expence e){
        SimpleDateFormat localDateFormat = new SimpleDateFormat("HH:mm:ss");
        String time = localDateFormat.format(new Date());
        System.out.println(time);

        Date today = new Date();
        e.setIndex((int)expenceRepository.count()+1);
        e.setExdate(today);
        e.setExpence(String.valueOf(time)+" "+e.getExpence());
        expenceRepository.save(e);

        int index = (int)salaryRepository.count();
        Salary s = salaryRepository.getById(index);
        s.setSpentAmount(s.getSpentAmount()+e.getSpent());
        s.setMoneyLeft(s.getMoneyLeft()-e.getSpent());
        salaryRepository.save(s);

        return salaryRepository.findById(index).getMoneyLeft();



    }


    public List<Expence> getExpencesBetweenDates(Date d1, Date d2){
        return expenceRepository.findAllBetween(d1,d2);
    }
}
