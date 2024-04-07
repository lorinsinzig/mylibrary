package ch.sinzig.mylibrary.Buch;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/buecher")
@CrossOrigin
public class BuchController {
    
    @Autowired
    private BuchRepository buchRepository;

    @GetMapping("/")
    public List<Buecher> getAllBuecher() {
        return buchRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Buecher getBuch(@PathVariable String id) {
        return buchRepository.findBuchById(id);
    }
    
    @PostMapping("/")
    public Buecher createBuch(@RequestBody Buecher buch) {
        return buchRepository.save(buch);
    }
    
    @PutMapping("/{id}")
    public Buecher updateBuch(@PathVariable String id, @RequestBody Buecher updatedBuch) {
        Buecher oldBuch = buchRepository.findBuchById(id);
        if (oldBuch != null) {
            oldBuch.setIBAN(updatedBuch.getIBAN());
            oldBuch.setTitel(updatedBuch.getTitel());
            oldBuch.setAutor_Id(updatedBuch.getAutor_Id());
            oldBuch.setGenre_Id(updatedBuch.getGenre_Id());
            oldBuch.setSprache_Id(updatedBuch.getSprache_Id());
            oldBuch.setSeitenanzahl(updatedBuch.getSeitenanzahl());
            oldBuch.setVeröffentlichungsdatum(updatedBuch.getVeröffentlichungsdatum());
            return buchRepository.save(oldBuch);
        }
        return null;
    }
    
    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable String id) {
        buchRepository.deleteById(id);
        return id;
    }
}
