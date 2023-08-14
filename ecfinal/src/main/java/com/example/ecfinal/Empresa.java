package com.example.ecfinal;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Empresa {

    private @Id @GeneratedValue Long id;
    private String nombre;
    private String razonSocial;
    private String rubro;

    private Empresa() {}

    public Empresa(String nombre, String razonSocial, String rubro) {
        this.nombre = nombre;
        this.razonSocial = razonSocial;
        this.rubro = rubro;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Empresa empresa = (Empresa) o;
        return Objects.equals(id, empresa.id) &&
                Objects.equals(nombre, empresa.nombre) &&
                Objects.equals(razonSocial, empresa.razonSocial) &&
                Objects.equals(rubro, empresa.rubro);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, razonSocial, rubro);
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", razonSocial='" + razonSocial + '\'' +
                ", rubro='" + rubro + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public String getRubro() {
        return rubro;
    }

    public void setRubro(String rubro) {
        this.rubro = rubro;
    }
}
