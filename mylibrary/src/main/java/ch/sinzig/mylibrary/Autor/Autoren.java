package ch.sinzig.mylibrary.Autor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Autoren {
    @Id
    private String id;
    private String Name;
    private String Vorname;
    private Integer Geburtsjahr;
    private String Land;
    private String[] Werke;
}

