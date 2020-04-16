export default class TicketDataService {
    private url: string = 'https://icticketing.azurewebsites.net/api/ticketanon';

    async getTicketList() {
        const promise = await fetch(this.url);
        const data = await promise.json();

        return data;
    }
}