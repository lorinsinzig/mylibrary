package ch.sinzig.mylibrary.Kunde;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kunden")
@CrossOrigin
public class KundeController {
    
    @Autowired
    private KundeRepository kundeRepository;

    @GetMapping("/")
    public List<Kunden> getAllKunden() {
        return kundeRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Kunden getKunde(@PathVariable String id) {
        return kundeRepository.findKundeById(id);
    }
    
    @PostMapping("/")
    public Kunden createKunde(@RequestBody Kunden kunde) {
        return kundeRepository.save(kunde);
    }
    
    @PutMapping("/{id}")
    public Kunden updateKunde(@PathVariable String id, @RequestBody Kunden updatedKunde) {
        Kunden oldKunde = kundeRepository.findKundeById(id);
        if (oldKunde != null) {
            // Update the fields of oldKunde with the values from updatedKunde
            oldKunde.setName(updatedKunde.getName());
            oldKunde.setVorname(updatedKunde.getVorname());
            oldKunde.setEmail(updatedKunde.getEmail());
            oldKunde.setGeburtsdatum(updatedKunde.getGeburtsdatum());
            oldKunde.setStrasse(updatedKunde.getStrasse());
            oldKunde.setOrt(updatedKunde.getOrt());
            oldKunde.setPLZ(updatedKunde.getPLZ());
            oldKunde.setLand(updatedKunde.getLand());
            oldKunde.setTelefonnummer(updatedKunde.getTelefonnummer());
            return kundeRepository.save(oldKunde);
        }
        return null; // Return null if Kunde with given id doesn't exist
    }
    
    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable String id) {
        kundeRepository.deleteById(id);
        return id;
    }
}
