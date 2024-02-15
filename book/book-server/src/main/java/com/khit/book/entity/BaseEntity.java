package com.khit.book.entity;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {
	
	@CreationTimestamp
	@Column(updatable = false)
	protected Timestamp createdDate;	//생성일
	
	@UpdateTimestamp
	@Column(insertable = false)
	protected Timestamp updatedDate;	//수정일
}