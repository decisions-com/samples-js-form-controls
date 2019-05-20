# A Vanilla JS Tooltip Icon!
* **tooltip** _String_ - tooltip text to show.
* **character** _String, optional_ - which character to show- defaults to "i"
* **appendStyle** _Bool, optional_ - true to append styles.
    - They should be easy to override with page CSS.
    - Convenient if you have one, but inefficient if you have many. Prefer page styles if you have many.

_If you have many, or care about branding, you should add page CSS simliar to:_

```css
.infoIcon {
  border: solid 2px blue;
  width: 1.5rem;
  height: 1.5rem;
  color: blue;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  line-height: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
}
```