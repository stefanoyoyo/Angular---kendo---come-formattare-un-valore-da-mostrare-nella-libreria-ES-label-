# angular-fe9fk2-j76sc9

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-fe9fk2-j76sc9)


# Angular - kendo - come formattare un valore da mostrare nella libreria (ES: label)
Posso riuscire a formattare una stringa da mostrare nella libreria 
inserendovi dentro ad esempio delle variabili fornite; un po' come se 
facessi  `Ciao ${jack}` dove jack è uan variabile.
Per farlo devo usare il servizio public intlService: IntlService.
Queesto servizio mette a disposizione un metodo format che chiede come
parametro la stringa da formattare ed i valori da inserirvi dentro.

Il formato {0:c} indica: 
 • 0 è la posizione dell'elemento nell'array specificato 
 • c è il valore (così mi sembra di capire)