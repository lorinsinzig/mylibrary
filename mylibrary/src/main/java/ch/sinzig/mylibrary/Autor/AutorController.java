package ch.sinzig.mylibrary.Autor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/autoren")
@CrossOrigin
public class AutorController {
    
    @Autowired
    private AutorRepository autorRepository;

    @GetMapping("/")
    public List<Autoren> getAllAutoren() {
        return autorRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Autoren getAutor(@PathVariable String id) {
        return autorRepository.findAutorById(id);
    }
    
    @PostMapping("/")
    public Autoren createAutor(@RequestBody Autoren autor) {
        return autorRepository.save(autor);
    }
    
    @PutMapping("/{id}")
    public Autoren updateAutor(@PathVariable String id, @RequestBody Autoren updatedAutor) {
        Autoren oldAutor = autorRepository.findAutorById(id);
        if (oldAutor != null) {
            oldAutor.setName(updatedAutor.getName());
            oldAutor.setVorname(updatedAutor.getVorname());
            oldAutor.setGeburtsjahr(updatedAutor.getGeburtsjahr());
            oldAutor.setLand(updatedAutor.getLand());
            oldAutor.setWerke(updatedAutor.getWerke());
            return autorRepository.save(oldAutor);
        }
        return null;
    }
    
    @DeleteMapping("/{id}")
    public String deletebyId(@PathVariable String id) {
        autorRepository.deleteById(id);
        return id;
    }
}
