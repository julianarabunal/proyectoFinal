package ar.unlam.packagedao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import ar.unlam.entities.Person;
import ar.unlam.hibernate.SessionUtil;

public class PersonDAO {

	public List<Person> getPersons(){
		Session session = SessionUtil.getSession();
		Query query = session.createQuery("from Person");
		List <Person> persons = query.list();
		session.close();
		return persons;
	}
	
	public Person addPerson(Person newPerson){
		Session session = SessionUtil.getSession();	
		Transaction transaccion = null;
		try {
			 transaccion = session.beginTransaction();
			session.save(newPerson);
			session.getTransaction().commit();
		} catch (Exception e) {
			transaccion.rollback();	
		}
		finally{
			session.close();
		}
		return newPerson;
	}
	
	public Person removePerson(Person personToRemove){
		Session session = SessionUtil.getSession();
		Transaction transaccion = null;
		try{
			transaccion=session.beginTransaction();
			session.delete(personToRemove);
			session.getTransaction().commit();
		}catch (Exception e){
			transaccion.rollback();
		}
		finally{
			session.close();
		}
		return personToRemove;
		
	}
	
	public Person updatePerson(Person personToUpdate){
		Session session = SessionUtil.getSession();
		Transaction transaccion = null;
		try{
			transaccion = session.beginTransaction();
			session.update(personToUpdate);
			session.getTransaction().commit();
		}catch (Exception e){
		    transaccion.rollback();
		}
		finally{
			session.close();
		}
		return personToUpdate;
	}
	
	public Person loadPerson(int idPerson){
		Session session = SessionUtil.getSession();
		Person personLoaded = null;
		try{
			personLoaded = (Person)session.get(Person.class, idPerson);
		}catch (Throwable e)
		{
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return personLoaded;
	}
	
	public Person loadPersonByName(String namePerson){
		Session session = SessionUtil.getSession();
		Person personLoaded = null;
		try{
			Criteria criteria = session.createCriteria(Person.class); 
			personLoaded  = (Person)criteria.add(Restrictions.eq("name", namePerson)).uniqueResult();
		}catch (Throwable e)
		{
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return personLoaded;
	}
	
	
	
}
