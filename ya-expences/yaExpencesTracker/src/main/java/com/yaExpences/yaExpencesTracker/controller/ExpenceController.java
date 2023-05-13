package com.yaExpences.yaExpencesTracker.controller;

import com.yaExpences.yaExpencesTracker.model.Expence;
import com.yaExpences.yaExpencesTracker.service.ExpenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ExpenceController {
    @Autowired
    ExpenceService expenceService;
    @GetMapping("/api/getExpences/{d1}/{d2}")
    public List<Expence> getAllEXpencesBetween(@PathVariable("d1") @DateTimeFormat(pattern = "yyyy-MM-dd") Date d1,
                                               @PathVariable("d2") @DateTimeFormat(pattern = "yyyy-MM-dd") Date d2){
        return expenceService.getExpencesBetweenDates(d1,d2);
    }

    @PostMapping("/api/postExpence")
    public int addExpence(@RequestBody Expence e){
        return expenceService.addExpence(e);
    }

}
