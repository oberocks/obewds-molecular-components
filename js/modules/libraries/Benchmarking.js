// import utility dependencies
import { settings_merge } from '../helpers/settings_merge.js';


export class Benchmarking {
    
    constructor (opts = false) {
        
        // define default class settings/options
        this._defaults = {
            loops : 10000
        };

        // merge any passed options settings into the default settings to get a final settings object
        this.defaults = (opts) ? settings_merge(this._defaults, opts) : this._defaults;

        // clear original defaults
        this._defaults = null;

        this.benchmarks = {};

    }

    start (key, obj) {

        this.benchmarks[key] = obj;

    }

    end (key, val) {

        this.benchmarks[key].finish = val;
        this.benchmarks[key].duration = this.benchmarks[key].finish - this.benchmarks[key].start;
        console.table(this.benchmarks[key]);

    }

    now () {

        return performance.now();

    }

    render_results_card (benchmarkKey, elementId) {

        //document.getElementById(elementId).innerHTML = JSON.stringify(this.benchmarks, null, 4);
        let fragment = document.createDocumentFragment();

        let card = document.createElement('div');
            card.className = 'card card-body bg-black text-white text-center box-shadow-xs mb-4';

        let duration = this.benchmarks[benchmarkKey].duration;

        let data = document.createElement('h1');
            data.className = 'text-chartreuse';
            data.appendChild(document.createTextNode(Number(duration).toLocaleString() + ' ms'));

        let headline = document.createElement('p');
            headline.className = 'lead mb-1';
            headline.appendChild(document.createTextNode(this.benchmarks[benchmarkKey].name));

        let description = document.createElement('p');
            description.className = 'small text-light';
            description.appendChild(document.createTextNode(this.benchmarks[benchmarkKey].description));

        card.appendChild(data);
        card.appendChild(headline);
        card.appendChild(description);

        fragment.appendChild(card);

        document.getElementById(elementId).appendChild(fragment);

    }

    generate_dom_test (options, callback) {
        
        this.start(options.slug, {
            name : options.name,
            description : options.description,
            start : this.now()
        });
        
        const fragment = document.createDocumentFragment();

        const loopCount = Number(options.loops);

        for (var i = 0; i < loopCount; i++) {
            let nodes = callback();
            fragment.appendChild(nodes);
        }

        document.getElementById(options.target).appendChild(fragment);

        this.end(options.slug, this.now());

        document.getElementById(options.target).innerHTML = '';

    }
    
}