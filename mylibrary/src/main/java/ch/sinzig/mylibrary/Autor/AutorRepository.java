package ch.sinzig.mylibrary.Autor;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AutorRepository extends MongoRepository<Autoren,String>{
    Autoren findAutorById(String id);
}