package ar.unlam.endpoint;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import ar.unlam.entities.Person;
import ar.unlam.packagedao.PersonDAO;

@Path("persons")
public class PersonEndpoint {
	PersonDAO personDao = new PersonDAO();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("GetAllList")
	public List<Person> getPersons() {

		List<Person> persons = personDao.getPersons();
		return persons;
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("AddNewPerson")
	public Person addPerson(Person newPerson) {
		personDao.addPerson(newPerson);
		return newPerson;
	}

	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("DeletePerson")
	public Person removePerson(Person personToRemove){
		personDao.removePerson(personToRemove);
		return personToRemove;
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("UpdatePerson")
	public Person updatePerson(Person personToUpdate){
		personDao.updatePerson(personToUpdate);
		return personToUpdate;
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("LoadPerson")
	public Person loadPerson(Person personToLoad){
		Person personaEncontrada = personDao.loadPerson(personToLoad.getId());
		return personaEncontrada;
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("LoadPersonByName")
	public Person loadPersonByName(Person personToLoad){
		Person personaEncontrada = personDao.loadPersonByName(personToLoad.getName());
		return personaEncontrada;
	}
	
}
