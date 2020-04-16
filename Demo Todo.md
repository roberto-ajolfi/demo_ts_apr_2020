GIT Repo x esercizio di oggi
===

Repository codice di partenza: https://github.com/roberto-ajolfi/spa-skeleton-react.git

TODO
----
- Aggiungere una **list view** con 
	- l'elenco dei Tickets
	- il pulsante Open New Ticket
	- i pulsanti Edit / Delete *per il singolo Ticket*

- Aggiungere la **form di inserimento** di un nuovo Ticket

- Aggiungere la **form di modifica** di un Ticket esistente

- Gestire **la cancellazione** di un Ticket

- Tutte le funzionalità dovranno utilizzare un **servizio** che implementa le funzionalità CRUD (GET, POST, PUT, DELETE) comunicando con le REST API disponibili all'URL:
	- https://icticketing.azurewebsites.net/api/ticketanon

HINTS
----
- l'applicazione utilizza la libreria `reactstrap` per incapsulare i comportamenti di Bootstrap in una serie di Component. In caso di dubbi, potete usare direttamente Bootstrap

- `<Redirect to="/ticketlist"/>` (con un tocco di conditional rendering) è il modo di gestire la redirezione in `react-router`

- per le form di creazione / modifica conviene usare lo stato del componente per gestire i singoli campi e poi sul submit costruire il modello da inviare tramite API
	- conviene anche avere 2 modelli distinti per visualizzare / creare i ticket

- per utilizzare fetch con gli altri HTTP Verbs occorre specificare il secondo parametro. Es.
	```
	const promise = await fetch(url, { 
		method: 'DELETE'	// oppure POST e PUT
	});
	```

- per specificare il body con fetch occorre specificare il secondo parametro. Es.
	```
	const promise = await fetch(url, { 
		method: 'POST',
		body: JSON.stringify(ticket)
	});
	```