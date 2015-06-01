{% for cat in site.category-list %}
### {{ cat }}
<ul>
    {% for page in site.pages %}
        {% if page.resource == true %}
            {% for pc in page.categories %}
                {% if pc == cat %}
                 <li><a href="{{ page.url }}">{{ page.title }}</a></li>
                {% endif %}
            {% endfor %}
        {% endif %}
    {% endfor %}
</ul>
{% endfor %}