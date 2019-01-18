import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
  
  hospitales: Hospital[] = [];
  
  constructor(
    public _hospitalServicos: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {

    this.cargarHospitales();
    this._modalUploadService.notificacion.subscribe(() => this.cargarHospitales());
  }
  
  cargarHospitales() {

    this._hospitalServicos.cargarHospitales()
        .subscribe( hospitales => this.hospitales = hospitales );
  }
  
  buscarHospital( termino: string ) {

    if ( termino.length <= 0) {
      this.cargarHospitales();
      return;
    }

    this._hospitalServicos.buscarHospital( termino )
        .subscribe(hospitales => this.hospitales = hospitales);
  }

  guardarHospital( hospital: Hospital ) {
    this._hospitalServicos.actualizarHospital( hospital)
        .subscribe(() => this.cargarHospitales());
  }

  borrarHospital( hospital: Hospital ) {
    this._hospitalServicos.borrarHospital( hospital._id)
        .subscribe( () => this.cargarHospitales() );
  }

  crearHospital() {
    swal({
      title: 'Crear Hospital',
      text: 'Nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true,

    }).then((valor: string) => {
      if (!valor || valor.length <= 0) {
        return;
      }

      this._hospitalServicos.crearHospital(valor)
          .subscribe( () => this.cargarHospitales());
    });
  }

  actualizarImagen(hospital: Hospital) {
    this._modalUploadService.mostrarModal('hospitales', hospital._id);
  }
}
