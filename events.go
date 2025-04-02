package main

type EventsHandlers struct {
	Events map[string]func(data interface{})
}

func (evHandlers *EventsHandlers) AddEvent(name string, handler func(data interface{})) {
	evHandlers.Events[name] = handler
}

func (evHandlers *EventsHandlers) RemoveEvent(name string, handler func(data interface{})) {
	evHandlers.Events[name] = handler
}

func (evHandlers *EventsHandlers) HandleEvent(name string, data interface{}) bool {
	handler, ok := evHandlers.Events[name]
	if ok {
		handler(data)
	}
	return ok
}

func newEventHandlers() EventsHandlers {
	return EventsHandlers{
		Events: map[string]func(data interface{}){},
	}
}
