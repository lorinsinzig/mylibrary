package ch.sinzig.mylibrary.Kunde;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/kunden")
@CrossOrigin
public class KundeController {
    
    @Autowired
    private KundeRepository kundeRepository;

    @GetMapping("/")
    public List<Kunden> getAllKunden() {
        return kundeRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Kunden getKundeById(@PathVariable String id) {
        // Check if id is not null or empty
        if (id != null && !id.isEmpty()) {
            return kundeRepository.findById(id).orElse(null);
        } else {
            // Handle the case where id is null or empty
            return null;
        }
    }
    
    @PostMapping("/")
    public Kunden createKunde(@RequestBody Kunden kunde) {
        // Check if kunde is not null
        if (kunde != null) {
            return kundeRepository.save(kunde);
        } else {
            // Handle the case where kunde is null
            return null;
        }
    }
    
    @PutMapping("/{id}")
    public Kunden updateKunde(@PathVariable String id, @RequestBody Kunden updatedKunde) {
        // Check if id and updatedKunde are not null
        if (id != null && updatedKunde != null) {
            Kunden oldKunde = kundeRepository.findById(id).orElse(null);
            if (oldKunde != null) {
                oldKunde.setName(updatedKunde.getName());
                oldKunde.setVorname(updatedKunde.getVorname());
                oldKunde.setEmail(updatedKunde.getEmail());
                oldKunde.setGeburtsdatum(updatedKunde.getGeburtsdatum());
                oldKunde.setStrasse(updatedKunde.getStrasse());
                oldKunde.setOrt(updatedKunde.getOrt());
                //oldKunde.setPLZ(updatedKunde.getPLZ());
                oldKunde.setLand(updatedKunde.getLand());
                oldKunde.setTelefonnummer(updatedKunde.getTelefonnummer());
                oldKunde.setBemerkung(updatedKunde.getBemerkung());
                oldKunde.setBeruf(updatedKunde.getBeruf());
                oldKunde.setVorbestrafung(updatedKunde.getVorbestrafung());
                return kundeRepository.save(oldKunde);
            }
        }
        // Handle the case where id or updatedKunde is null
        return null;
    }
    
    @DeleteMapping("/{id}")
    public String deleteKunde(@PathVariable String id) {
        // Check if id is not null or empty
        if (id != null && !id.isEmpty()) {
            kundeRepository.deleteById(id);
            return id;
        } else {
            // Handle the case where id is null or empty
            return null;
        }
    }
}
