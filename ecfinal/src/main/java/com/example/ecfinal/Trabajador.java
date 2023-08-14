package com.example.ecfinal;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Trabajador {

    private @Id @GeneratedValue Long id;
    private String nombre;
    private String usuario;
    private String contraseña;

    private Trabajador() {}

    public Trabajador(String nombre, String usuario, String contraseña) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Trabajador trabajador = (Trabajador) o;
        return Objects.equals(id, trabajador.id) &&
                Objects.equals(nombre, trabajador.nombre) &&
                Objects.equals(usuario, trabajador.usuario) &&
                Objects.equals(contraseña, trabajador.contraseña);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, usuario, contraseña);
    }

    @Override
    public String toString() {
        return "Trabajador{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", usuario='" + usuario + '\'' +
                ", contraseña='" + contraseña + '\'' +
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

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
}