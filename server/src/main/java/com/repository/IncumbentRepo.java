import com.example.model.Incumbent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IncumbentRepo
    extends MongoRepository<Incumbent, String> {
}