import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Cafe } from '../cafe';
import { CafeModule } from '../cafe-module';
import { CafeService } from '../cafe-service';
import { CafeList } from './cafe-list';

describe('CafeList', () => {
  let fixture: ComponentFixture<CafeList>;

  const cafes: Cafe[] = [
    new Cafe(1, 'Café Uno', 'Blend', 'Región Uno', 'Panela', 1900, 'uno.jpg'),
    new Cafe(2, 'Café Dos', 'Café de Origen', 'Región Dos', 'Cítrico', 1800, 'dos.jpg'),
    new Cafe(3, 'Café Tres', 'Blend', 'Región Tres', 'Cacao', 1700, 'tres.jpg'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeModule],
      providers: [{ provide: CafeService, useValue: { getCafes: () => of(cafes) } }],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeList);
    await fixture.whenStable();
  });

  it('debe crear la tabla con tres filas más el encabezado', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelectorAll('tbody tr').length).toBe(3);
    expect(el.querySelectorAll('thead tr').length).toBe(1);
    expect(el.querySelectorAll('tr').length).toBe(4);
  });

  it('debe mostrar nombre, tipo y región de cada café', () => {
    const celdas = (fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr:first-child td');

    expect(celdas[0].textContent).toContain('Café Uno');
    expect(celdas[1].textContent).toContain('Blend');
    expect(celdas[2].textContent).toContain('Región Uno');
  });

  it('debe calcular el total de cafés por tipo', () => {
    const textos = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('p.totales')).map(
      (p) => p.textContent,
    );

    expect(textos).toEqual(['Total café de origen: 1', 'Total café blend: 2']);
  });
});
