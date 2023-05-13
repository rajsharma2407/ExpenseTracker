package com.yaExpences.yaExpencesTracker;

import com.yaExpences.yaExpencesTracker.model.Salary;
import com.yaExpences.yaExpencesTracker.repository.SalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Date;

@SpringBootApplication
public class YaExpencesTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(YaExpencesTrackerApplication.class, args);
	}
	@Autowired
	SalaryRepository salaryRepository;

	@Scheduled(cron = "0 0 0 1 * *")
	void addNewSalary(){
		Salary s = new Salary();
		s.setMoneyLeft(50000);
		s.setSpentAmount(0);
		s.setDate(new Date());
		s.setIndex((int)salaryRepository.count()+1);
		salaryRepository.save(s);
		System.out.println("yeppie!!!! new salary arrived");
	}

}


@Configuration
@EnableScheduling
@ConditionalOnProperty(name = "scheduling.enabled",matchIfMissing = true)
class SchedulingConfiguration{

}