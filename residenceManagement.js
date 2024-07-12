// Base class for all residences
class Residence {
  constructor(name, address) {
      this.name = name;
      this.address = address;
      this.occupied = false; // Default to unoccupied
  }
}

// DormRoom class extending Residence
class DormRoom extends Residence {
  constructor(name, address, size) {
      super(name, address);
      this.size = size; // Size in square footage
      this.rent = this.calculateRent();
  }

  calculateRent() {
      return this.size * 1.5; // Example rent calculation formula
  }
}

// Apartment class extending Residence
class Apartment extends Residence {
  constructor(name, address, bedrooms) {
      super(name, address);
      this.bedrooms = bedrooms; // Number of bedrooms
      this.rent = this.calculateRent();
  }

  calculateRent() {
      return this.bedrooms * 500; // Example rent calculation formula
  }
}

// Student class
class Student {
  constructor(name, studentId, gender, residence = null) {
      this.name = name;
      this.studentId = studentId;
      this.gender = gender;
      this.residence = residence; // refernce to the residence
  }

  assignResidence(residence) {
      this.residence = residence;
      residence.occupied = true;
  }
}

// MaintenanceRequest class
class MaintenanceRequest {
  constructor(description, student) {
      this.description = description;
      this.status = 'submitted'; // Default status
      this.student = student; // Reference to the student who submitted
      this.assignedEmployee = null; // Employee not assigned initially
  }

  assignEmployee(employee) {
      this.assignedEmployee = employee;
      this.status = 'in progress';
  }

  completeRequest() {
      this.status = 'completed';
  }
}
