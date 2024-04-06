package ch.sinzig.mylibrary.Kunde;

import org.springframework.data.mongodb.repository.MongoRepository;
public interface KundeRepository extends MongoRepository<Kunden,String>{
    
}