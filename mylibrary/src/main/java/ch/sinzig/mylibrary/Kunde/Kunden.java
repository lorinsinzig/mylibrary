package ch.sinzig.mylibrary.Kunde;

import java.util.Date; // Import java.util.Date

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
    private String id;
    private String Name;
    private String Vorname;
    private String Email;
    private Date Geburtsdatum; // Change the type back to java.util.Date
    private String Strasse;
    private String Ort;
    private Integer PLZ;
    private String Land;
    private String Telefonnummer;
}
