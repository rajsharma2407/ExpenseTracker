package com.yaExpences.yaExpencesTracker.repository;

import com.yaExpences.yaExpencesTracker.model.Expence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ExpenceRepository extends JpaRepository<Expence,Integer> {
    @Query(value = "Select * from expences.expences where exdate between :d1 and :d2",nativeQuery = true)
    List<Expence> findAllBetween(Date d1, Date d2);
}
