package ch.sinzig.mylibrary.Buch;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BuchRepository extends MongoRepository<Buecher,String>{
    Buecher findBuchById(String id);
}