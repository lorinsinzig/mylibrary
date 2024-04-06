package ch.sinzig.mylibrary.Kunde;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Kunden {
    @Id
    private String Id;
    private String Name;
    private String Vorname;
    private String Email;
    private Date Geburtsdatum;
    private String Strasse;
    private String Ort;
    private Integer PLZ;
    private String Land;
    private String Telefonnummer;
    private String Bemerkung;
    private String Beruf;
    private String Vorbestrafung;
}

