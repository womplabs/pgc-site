const createCountdown = (countdownEl, endDate) => {
	const COUNTER_NAMES = ['days', 'hours', 'minutes', 'seconds'];

	const createCounter = (label) => {
		const fragment = document.createDocumentFragment();
		const containerEl = document.createElement('div');
		const valueEl = document.createElement('div');
		const labelEl = document.createElement('div');

		// Set counter label
		labelEl.innerText = labelText

		// Append counter elements
		container.appendChild(valueEl);
		container.appendChild(labelEl);
		fragment.appendChild(containerEl);

		// Add style classes
		value.classList.add('countdown-element-value');
		label.classList.add('countdown-element-label');
		el.classList.add('countdown-element');

		return {
			get el() {
				return fragment;
			},

			update(value) {
				valueEl.innerText = value;
			},

			remove() {
				console.log('removing');
			}
		};
	};

	const getTimeRemaining = (endDate) => {
		var t = endDate - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	const updateCountdown = (counters, countdownEnd) => {
		console.log('Updating countdown');

		// Update time remaining values
		const timeRemaining = getTimeRemaining(countdownEnd);

		// Update the counter display values
		COUNTER_NAMES.forEach(counterName => {
			counters[counterName].update(timeRemaining[counterName]);
		});
	};

	const mountComponent = (el, counters) => {
		// Add all countdown elements
		COUNTER_NAMES.forEach(counterName => {
			el.appendChild(counters[counterName].el);
		});

		setInterval(() => updateCountdown(countdownEnd), 100);
	};

	try {
		const countdownEnd = Date.parse(endDate);

		const counters = {
			days: createCounter('days'),
			hours: createCounter('hours'),
			minutes: createCounter('minutes'),
			seconds: createCounter('seconds')
		};

		COUNTER_NAMES.forEach(counterName => {
			countdownEl.appendChild(counters[counterName].el);
		});

		mountComponent(countDownEl, counters);
	} catch (error) {
		console.trace('Error initializing countdown end date!', error);
	}
};
