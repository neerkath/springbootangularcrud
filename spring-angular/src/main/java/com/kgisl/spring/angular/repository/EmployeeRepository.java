package com.kgisl.spring.angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kgisl.spring.angular.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    
}
