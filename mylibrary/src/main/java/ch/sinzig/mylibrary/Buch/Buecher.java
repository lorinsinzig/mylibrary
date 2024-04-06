package ch.sinzig.mylibrary.Buch;

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
public class Buecher {
    @Id
    private String Id;
    private String IBAN;
    private String Titel;
    private String Autor_Id;
    private String Genre_Id;
    private String Sprache_Id;
    private String Seitenanzahl;
    private Date Veröffentlichungsdatum;
    private String Bewertung;
    private String Verlag;
}
