package ch.sinzig.mylibrary.Buch;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/buecher")
@CrossOrigin
public class BuchController {
    
    @Autowired
    private BuchRepository buchRepository;

    @GetMapping("/")
    public List<Buecher> getAllBuecher() {
        return buchRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Buecher getBuchById(@PathVariable String id) {
        // Check if id is not null or empty
        if (id != null && !id.isEmpty()) {
            return buchRepository.findById(id).orElse(null);
        } else {
            // Handle the case where id is null or empty
            return null;
        }
    }
    
    @PostMapping("/")
    public Buecher createBuch(@RequestBody Buecher buch) {
        // Check if buch is not null
        if (buch != null) {
            return buchRepository.save(buch);
        } else {
            // Handle the case where buch is null
            return null;
        }
    }
    
    @PutMapping("/{id}")
    public Buecher updateBuch(@PathVariable String id, @RequestBody Buecher updatedBuch) {
        // Check if id and updatedBuch are not null
        if (id != null && updatedBuch != null) {
            Buecher oldBuch = buchRepository.findById(id).orElse(null);
            if (oldBuch != null) {
                oldBuch.setIBAN(updatedBuch.getIBAN());
                oldBuch.setTitel(updatedBuch.getTitel());
                oldBuch.setAutor_Id(updatedBuch.getAutor_Id());
                oldBuch.setGenre_Id(updatedBuch.getGenre_Id());
                oldBuch.setSprache_Id(updatedBuch.getSprache_Id());
                oldBuch.setSeitenanzahl(updatedBuch.getSeitenanzahl());
                oldBuch.setVeröffentlichungsdatum(updatedBuch.getVeröffentlichungsdatum());
                oldBuch.setBewertung(updatedBuch.getBewertung());
                oldBuch.setVerlag(updatedBuch.getVerlag());
                return buchRepository.save(oldBuch);
            }
        }
        // Handle the case where id or updatedBuch is null
        return null;
    }
    
    @DeleteMapping("/{id}")
    public String deleteBuch(@PathVariable String id) {
        // Check if id is not null or empty
        if (id != null && !id.isEmpty()) {
            buchRepository.deleteById(id);
            return id;
        } else {
            // Handle the case where id is null or empty
            return null;
        }
    }
}
