package ch.sinzig.mylibrary.Autor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/autor")
@CrossOrigin
public class AutorController {
    
    @Autowired
    private AutorRepository autorRepository;

    @GetMapping("/")
    public List<Autoren> getAllAutoren() {
        return autorRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Autoren getAutorById(@PathVariable String id) {
        // Check if id is not null or empty
        if (id != null && !id.isEmpty()) {
            return autorRepository.findById(id).orElse(null);
        } else {
            // Handle the case where id is null or empty
            return null;
        }
    }
    
    @PostMapping("/")
    public Autoren createAutor(@RequestBody Autoren autor) {
        // Check if autor is not null
        if (autor != null) {
            return autorRepository.save(autor);
        } else {
            // Handle the case where autor is null
            return null;
        }
    }
    
    @PutMapping("/{id}")
    public Autoren updateAutor(@PathVariable String id, @RequestBody Autoren updatedAutor) {
        // Check if id and updatedAutor are not null
        if (id != null && updatedAutor != null) {
            Autoren oldAutor = autorRepository.findById(id).orElse(null);
            if (oldAutor != null) {
                oldAutor.setName(updatedAutor.getName());
                oldAutor.setVorname(updatedAutor.getVorname());
                oldAutor.setGeburtsjahr(updatedAutor.getGeburtsjahr());
                oldAutor.setLand(updatedAutor.getLand());
                oldAutor.setWerke(updatedAutor.getWerke());
                return autorRepository.save(oldAutor);
            }
        }
        // Handle the case where id or updatedAutor is null
        return null;
    }
    
    @DeleteMapping("/{id}")
    public String deleteAutor(@PathVariable String id) {
        // Check if id is not null or empty
        if (id != null && !id.isEmpty()) {
            autorRepository.deleteById(id);
            return id;
        } else {
            // Handle the case where id is null or empty
            return null;
        }
    }
}
